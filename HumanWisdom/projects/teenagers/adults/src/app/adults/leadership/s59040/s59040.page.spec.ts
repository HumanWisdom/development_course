import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59040Page } from './s59040.page';

describe('S59040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59040Page;
  let fixture: ComponentFixture<S59040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
