import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62011Page } from './s62011.page';

describe('S62011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62011Page;
  let fixture: ComponentFixture<S62011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
