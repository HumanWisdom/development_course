import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141051Page } from './s141051.page';

describe('S141051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141051Page;
  let fixture: ComponentFixture<S141051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
