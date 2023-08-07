import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132091Page } from './s132091.page';

describe('S132091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132091Page;
  let fixture: ComponentFixture<S132091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
