import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18001Page } from './s18001.page';

describe('S18001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18001Page;
  let fixture: ComponentFixture<S18001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
