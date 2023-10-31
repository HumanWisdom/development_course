import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62207Page } from './s62207.page';

describe('S62207Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62207Page;
  let fixture: ComponentFixture<S62207Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62207Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62207Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
