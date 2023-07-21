import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132182tPage } from './s132182t.page';

describe('S132182tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132182tPage;
  let fixture: ComponentFixture<S132182tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132182tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132182tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
