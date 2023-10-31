import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62164Page } from './s62164.page';

describe('S62164Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62164Page;
  let fixture: ComponentFixture<S62164Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62164Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62164Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
