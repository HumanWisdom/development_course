import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117004tPage } from './s117004t.page';

describe('S117004tPage', () => {
      
    let component:  S117004tPage;
  let fixture: ComponentFixture<S117004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
