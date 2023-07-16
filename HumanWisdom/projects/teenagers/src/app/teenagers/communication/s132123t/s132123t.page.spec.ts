import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132123tPage } from './s132123t.page';

describe('S132123tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132123tPage;
  let fixture: ComponentFixture<S132123tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132123tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132123tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
