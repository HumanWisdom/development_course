import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62191Page } from './s62191.page';

describe('S62191Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62191Page;
  let fixture: ComponentFixture<S62191Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62191Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62191Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
