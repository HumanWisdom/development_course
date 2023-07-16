import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132169Page } from './s132169.page';

describe('S132169Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132169Page;
  let fixture: ComponentFixture<S132169Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132169Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132169Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
