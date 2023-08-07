import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132232Page } from './s132232.page';

describe('S132232Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132232Page;
  let fixture: ComponentFixture<S132232Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132232Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132232Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
