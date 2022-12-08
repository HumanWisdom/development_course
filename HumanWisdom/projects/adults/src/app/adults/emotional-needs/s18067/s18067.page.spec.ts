import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18067Page } from './s18067.page';

describe('S18067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18067Page;
  let fixture: ComponentFixture<S18067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
