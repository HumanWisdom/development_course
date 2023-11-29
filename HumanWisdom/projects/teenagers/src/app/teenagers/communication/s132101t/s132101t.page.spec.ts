import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132101tPage } from './s132101t.page';

describe('S132101tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132101tPage;
  let fixture: ComponentFixture<S132101tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132101tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132101tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
