import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64056Page } from './s64056.page';

describe('S64056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64056Page;
  let fixture: ComponentFixture<S64056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
