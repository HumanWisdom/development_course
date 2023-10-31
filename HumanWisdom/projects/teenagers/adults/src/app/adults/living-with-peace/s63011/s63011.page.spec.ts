import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63011Page } from './s63011.page';

describe('S63011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63011Page;
  let fixture: ComponentFixture<S63011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
