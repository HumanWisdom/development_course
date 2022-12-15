import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62014Page } from './s62014.page';

describe('S62014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62014Page;
  let fixture: ComponentFixture<S62014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
