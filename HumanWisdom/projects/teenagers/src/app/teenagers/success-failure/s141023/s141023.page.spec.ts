import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141023Page } from './s141023.page';

describe('S141023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141023Page;
  let fixture: ComponentFixture<S141023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
