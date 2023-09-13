import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141006Page } from './s141006.page';

describe('S141006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141006Page;
  let fixture: ComponentFixture<S141006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
