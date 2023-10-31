import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18099Page } from './s18099.page';

describe('S18099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18099Page;
  let fixture: ComponentFixture<S18099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
