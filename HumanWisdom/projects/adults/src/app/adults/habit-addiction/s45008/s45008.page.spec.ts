import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45008Page } from './s45008.page';

describe('S45008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45008Page;
  let fixture: ComponentFixture<S45008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
