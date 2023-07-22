import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132129tPage } from './s132129t.page';

describe('S132129tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132129tPage;
  let fixture: ComponentFixture<S132129tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132129tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132129tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
