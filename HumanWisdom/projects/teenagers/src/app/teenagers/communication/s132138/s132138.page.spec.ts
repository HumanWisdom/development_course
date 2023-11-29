import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132138Page } from './s132138.page';

describe('S132138Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132138Page;
  let fixture: ComponentFixture<S132138Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132138Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132138Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
