import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132015Page } from './s132015.page';

describe('S132015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132015Page;
  let fixture: ComponentFixture<S132015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
