import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59011Page } from './s59011.page';

describe('S59011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59011Page;
  let fixture: ComponentFixture<S59011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
