import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S100001Page } from './s100001.page';

describe('S100001Page', () => {
      
    let component: S100001Page;
  let fixture: ComponentFixture<S100001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S100001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S100001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
