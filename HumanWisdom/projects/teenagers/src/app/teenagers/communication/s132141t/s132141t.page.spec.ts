import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132141tPage } from './s132141t.page';

describe('S132141tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132141tPage;
  let fixture: ComponentFixture<S132141tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132141tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132141tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
