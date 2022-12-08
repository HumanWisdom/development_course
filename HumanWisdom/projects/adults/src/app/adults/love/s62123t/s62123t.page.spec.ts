import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62123tPage } from './s62123t.page';

describe('S62123tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62123tPage;
  let fixture: ComponentFixture<S62123tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62123tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62123tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
