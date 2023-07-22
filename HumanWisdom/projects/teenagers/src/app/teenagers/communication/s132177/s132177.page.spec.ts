import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132177Page } from './s132177.page';

describe('S132177Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132177Page;
  let fixture: ComponentFixture<S132177Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132177Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132177Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
