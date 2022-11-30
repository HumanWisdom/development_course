import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18027Page } from './s18027.page';

describe('S18027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18027Page;
  let fixture: ComponentFixture<S18027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
