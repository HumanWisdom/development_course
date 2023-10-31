import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18056Page } from './s18056.page';

describe('S18056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18056Page;
  let fixture: ComponentFixture<S18056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
